import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

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

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
