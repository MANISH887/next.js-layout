import Image from "next/image";

async function getPosts() {
  const res = await fetch(`https://dummyjson.com/posts`, { cache: "no-store" });
  const posts = await res.json();

  return posts;
}

const About = async () => {
  const posts = await getPosts();
  console.log("posts", posts);

  return (
    <div>
      <h1>About page</h1>
      <div>
        <Image src="/images/post1.png" alt="Large Image" width={200} height={200} />
      </div>

      <div>
        <ul>
          {posts.posts.map((row) => (
            <li key={row.id}>
              <h5> {row.userId}</h5>
              <h4> {row.title}</h4>
              <p> {row.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
