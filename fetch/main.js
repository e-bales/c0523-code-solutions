async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response not okay...');
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(`An unexpected error occurred...: ${err}`);
  }
}

getData('https://jsonplaceholder.typicode.com/users');
