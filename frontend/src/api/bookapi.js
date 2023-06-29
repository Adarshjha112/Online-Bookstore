const getAllBooks = async () => {
    try {
      const response = await fetch('/books');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching books:', error);
      throw error;
    }
  };
  
  export { getAllBooks };
  