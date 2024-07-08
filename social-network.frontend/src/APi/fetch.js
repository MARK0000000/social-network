export async function fetchPost (data, url) {
    try {
        const response = await fetch(url, {
          method: "POST", 
          body: JSON.stringify(data), 
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();

        console.log("Успех:", JSON.stringify(json));
  
        return json;
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

export async function fetchGet (url) {
  fetch(url)
  .then((res) => res.json())
  .then((json) => {
      return json;
  })
  .catch((err) => console.warn(err))
}