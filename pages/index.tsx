import React, { useEffect, useState } from "react";
import { JobCard } from "../components/job";
import { Layout } from "../components/layout";
import { Loading } from "../components/loader";
import { Pagination } from "../components/pagination";
import { SearchBox, SearchLocation, SearchType } from "../components/search";
import { API_URL, GithubJob } from "../lib/api";

interface HomeProps {
  jobs: GithubJob[];
}
export default function Home(props: HomeProps) {
  const [jobs, setJobs] = useState<GithubJob[]>(props.jobs);
  const [type, setType] = useState(false);
  const [location, setLocation] = useState("");
  const [page, setPage] = useState(0);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("searching ....");
    //handleSearch();
  }, []);

  const handleSearch = (term?: string) => {
    setLoading(true);
    fetch("/api", {
      method: "POST",
      body: JSON.stringify({
        term,
        type,
        location,
        page,
      }),
    })
      .then((res) => res.json())
      .then(setJobs)
      .then(() => setLoading(false))
      .catch(console.log);
  };

  const handlePageChange = (page: number) => {
    setPage(page - 1);
    handleSearch();
  };
  return (
    <Layout title="home">
      <SearchBox onSearch={handleSearch} />
      <div className="responsive">
        <div className="search-widgets">
          <SearchType checked={type} onChange={setType} />
          <SearchLocation location={location} onChange={setLocation} />
        </div>

        <div className="full-width">
          {loading
            ? <Loading />
            : jobs.map((job) => <JobCard key={job.id} {...job} />)}
          <Pagination
            current={page + 1}
            onChange={handlePageChange}
            hasNext={jobs.length === 50}
            disabled={loading}
          />
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  try {
    const data = await fetch(`${API_URL}.json`);
    const jobs = await data.json();
    return {
      props: {
        jobs,
      },
    };
  } catch (err) {
    return {
      props: {
        jobs: [],
      },
    };
  }
};
