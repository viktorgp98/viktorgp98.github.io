export default async function getProject(id) {
  const idProject = id - 1;
  const response = await fetch(
    `https://portafolioviktorgonzalez-default-rtdb.firebaseio.com/projects/${idProject}.json`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch project");
  }
  return response.json();
}
