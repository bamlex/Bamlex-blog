import BlogList from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    ispending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {ispending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
