import toast from "react-hot-toast";

// get all gadgets from Local storage cart

const fetchDataFromLocalStorage = (id) => {
  const data = localStorage.getItem(id);
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

const updateLocalStorage = (key, items) => {
  localStorage.setItem(key, JSON.stringify(items));
};

const getAllCartItems = () => {
    return fetchDataFromLocalStorage("cartItems");
};

const getAllWishlist = () => {
    console.log(fetchDataFromLocalStorage("wishlist"));
    return fetchDataFromLocalStorage("wishlist");
};

const addItem = (key, gadget) => {
  const items = fetchDataFromLocalStorage(key);
  items.push(gadget);
  updateLocalStorage(key, items);
  toast.success("Successfully Added!");
};

const removeItem = (key, id) => {
  const items = fetchDataFromLocalStorage(key);
  const updateItems = items.filter((item) => item.id !== id);
  updateLocalStorage(key, updateItems);
  toast.success("Successfully Removed!");
};

const addWishlist = (gadget) => {
  addItem("wishlist", gadget);
};

const addCart = (gadget) => {
    addItem("cartItems", gadget);
}

const removeWishlist = (id) => {
    removeItem("wishlist", id)
}

const removeFromCart = (id) => {
    removeItem("cartItems", id)
}

export {
  getAllCartItems,
  getAllWishlist,
  addItem,
  removeItem,
  addWishlist,
  addCart,
  removeWishlist,
  removeFromCart,
};
