async function getData() {
  const url = "https://api.kanye.rest/";
  try {
    const response = await fetch(url, { method: "GET" });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } 
  catch (error) {
    console.error('Error: ' + error.message);
  }
}

getData();
