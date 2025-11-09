import { GitHubAvatar, GitHubRepoURL } from "./GitHubComponents.js";
import "./App.css";

export default function App() {
  const userInfo = {
    url: "http://github.com/Punnawich121-6",
    imgURL: "https://avatars.githubusercontent.com/u/102899977?v=4",
    alt: "Punnawich Saengsuriyakard",
  };

  return (
    <div className="App">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar imgURL={userInfo.imgURL} alt={userInfo.alt} size={200} />
      <GitHubRepoURL url={userInfo.url} />
    </div>
  );
}