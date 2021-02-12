export const getGifs = async (category,limit) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=GdrmRqTX51fHKnsSJJFkpUC1MWBeLJBy`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }
  })
  //console.log(gifs);
  return gifs;
}