const API_URL = "https://json-server-tan-kappa.vercel.app/cateraHowITWorks";

export async function getHowItWorks(lang) {
  try {
    const res = await fetch(`${API_URL}`, {
      method: "GET",
      headers: {
        "Accept-Language": lang,
      },
    });
    if (!res.ok) {
      throw new Error(res.status);
    }
    const data = res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}