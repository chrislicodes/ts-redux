import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

export const RepositoriesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(searchTerm);
  };

  return (
    <div>
      <form action="get" onSubmit={submitHandler}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      {error && <h3>An error occured</h3>}
      {loading && <h3>Loading..</h3>}
      {!error &&
        !loading &&
        data.map((packageName, index) => <li key={index}>{packageName}</li>)}
    </div>
  );
};
