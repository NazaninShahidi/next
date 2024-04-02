import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    title: "getting-started",
    image: "getting-started-nextjs.png",
    except: "NextJs is a the react framwork for production",
    date: "2022-02-10",
    slug: "getting-started",
  },
  {
    title: "getting-started",
    image: "getting-started-nextjs.png",
    except: "NextJs is a the react framwork for production",
    date: "2022-02-10",
    slug: "getting-started-2",
  },
  {
    title: "getting-started",
    image: "getting-started-nextjs.png",
    except: "NextJs is a the react framwork for production",
    date: "2022-02-10",
    slug: "getting-started-3",
  },
  {
    title: "getting-started",
    image: "getting-started-nextjs.png",
    except: "NextJs is a the react framwork for production",
    date: "2022-02-10",
    slug: "getting-started-4",
  },
];
function AllPostPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostPage;
