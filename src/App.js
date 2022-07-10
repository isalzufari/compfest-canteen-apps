import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {
  db,
  sg,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  addDoc,
  getDoc,
  getDocs,
  collection,
  doc,
  updateDoc,
  query,
  Timestamp,
  orderBy,
  increment
} from './utils/Firebase';

// Component
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Store from "./pages/Store";
import AddProduct from "./pages/AddProduct";
import DetailProduct from "./pages/DetailProduct";
import CanteenBalance from "./pages/CanteenBalance";

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [percent, setPercent] = useState(0);
  const [balance, setBalance] = useState(0);

  const onAddProduct = ({ nameProduct, image, desc, price }) => {
    const storageRef = ref(sg, `/products/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on("state_changed", (snapshot) => {
      const percent = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );

      // update Progress
      setPercent(percent);
      console.log(percent);
    }, (err) => console.log(err), () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          // setUrlImage(url);
          try {
            const docRef = addDoc(collection(db, "products"), {
              name: nameProduct,
              image: url,
              desc,
              price,
              createdAt: Timestamp.fromDate(new Date()),
              isDeleted: false
            });
      
            console.log("Document writter with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          setPercent(0);
        });
      }
    );
  }
  
  const onGetProducts = async (field, order) => {
    const q = query(
      collection(db, "products"),
      orderBy(field, order),
      );
    
    const saveProduct = [];
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const docId = { id: doc.id };
      if (doc.data().isDeleted === false) {
        saveProduct.push( Object.assign(docId, doc.data()) );
      }
    });
    setProducts(saveProduct);
  }

  const onGetProduct = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()) {
      const docId = { id: docSnap.id };
      setProduct(Object.assign(docId, docSnap.data()));
    } else {
      console.log("No such document!");
    }
  }

  const onSafeDeleteProduct = async (id) => {
    console.log(id);
    const safeDelete = doc(db, "products", id);

    await updateDoc(safeDelete, {
      isDeleted: true
    }).then(safeDelete => {
      console.log("A New Document Field has been added to an existing document");
    }).catch(error => {
      console.log(error);
    });
  }

  const onGetBalance = async () => {
    const docRef = doc(db, "balance", "balance1001");
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()) {
      setBalance(docSnap.data().balance);
    } else {
      console.log("No such document!");
    }
  }

  const onAddBalance = async (addBalance) => {
    const updateBalance = doc(db, "balance", "balance1001");

    await updateDoc(updateBalance, {
      balance: increment(addBalance)
    }).then(result => {
      console.log(`Balance updated + ${addBalance}`);
    }).catch(error => {
      console.log(error);
    })
  }

  const onWithdrawBalance = async (withdrawBalance) => {
    const updateBalance = doc(db, "balance", "balance1001");

    await updateDoc(updateBalance, {
      balance: increment(-withdrawBalance)
    }).then(result => {
      console.log(`Balance updated - ${withdrawBalance}`);
    }).catch(error => {
      console.log(error);
    })
  } 

  return (
    <BrowserRouter>
      <Navbar Link={Link} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="store" element={<Store products={products} getProducts={onGetProducts} />} />
            <Route path="store/:name" element={<DetailProduct product={product} getProduct={onGetProduct} deleteProduct={onSafeDeleteProduct} />} />
            <Route path="balance" element={<CanteenBalance getBalance={onGetBalance} balance={balance} addBalance={onAddBalance} withdrawBalance={onWithdrawBalance} />} /> 
            <Route path="add-product" element={<AddProduct addProduct={onAddProduct} percentUp={percent} />} />
          </Routes>
        </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
