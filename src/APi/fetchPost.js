export async function fetchPost (data, url) {
    try {
        const response = await fetch(url, {
          method: "POST", 
          body: JSON.stringify(data), 
          headers: {
            "Content-Type": "application/json",
          },
        });
        return true;
    } catch (error) {
        console.error("Ошибка:", error);
    }
}