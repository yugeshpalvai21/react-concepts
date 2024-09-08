import { useQuery } from "@tanstack/react-query";

export const UseQueryHook = () => {
  const fetchFactFn = async () => {
    const res = await fetch('https://catfact.ninja/fact?max_length=140');
    const data = await res.json();
    return data.fact;
  };
  
  const { isLoading, isError, error, data, refetch }  = useQuery({ 
                                                                  queryKey: ["fact"], 
                                                                  queryFn: fetchFactFn 
                                                                });

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <h4>Today's Quote:</h4>
      {data && <p>{data}</p>}
      <hr/>
      <button onClick={refetch}>Get Another Fact</button>
    </div>
  )
}