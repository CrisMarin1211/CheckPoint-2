async function getData() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      if (!response.ok) {
        throw new Error(`Error`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  