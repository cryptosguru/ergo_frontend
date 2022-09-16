import { useCallback, useRef, useState } from 'react';
import Link from 'next/link';

export default function Search() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const searchEndpoint = (query: string) =>
    process.env.NEXT_PUBLIC_STRAPI_API +
    `/api/posts?sort=date:desc&pagination[withCount]=true&pagination[pageSize]=100&[$or][0][title][$containsi]=${query}&filters[$or][1][subtitle][$containsi]=${query}&filters[$or][2][content][$containsi]=${query}`;

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => res.data)
        .then((res) => {
          console.log(res);
          setResults(res);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener('click', onClick);
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener('click', onClick);
    }
  }, []);

  return (
    <div ref={searchRef} className="mx-4">
      <input
        className=" bg-transparent w-full text-4xl placeholder-opacity-30 placeholder-white text-white focus:outline-none border-b-2 py-6 "
        onChange={onChange}
        onFocus={onFocus}
        placeholder="Type to search..."
        type="text"
        value={query}
      />
      {active && results.length > 0 && (
        <div>
          {results.map((result: any, index: number) => (
            <Link href={`/blog/${result.attributes.permalink}`} key={index}>
              <div key={result.id} className="search-card my-3 py-4 px-8 cursor-pointer">
                <div>
                  <div className="mb-3">
                    <b className="items-center px-3 py-0.5 rounded-full text-sm font-medium mr-4 bg-brand-black text-white uppercase z-10">
                      {result.attributes.type}
                    </b>
                  </div>
                  <p className="text-[16px] md:text-[24px] font-bold text-white mb-3">
                    {result.attributes.title}
                  </p>
                  <p className="text-[14px] md:text-[16px] text-white">
                    {result.attributes.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      {active && results.length == 0 && query.length > 0 && (
        <p className="font-vinila-extended text-[56px] my-24 text-white">
          Ops! We didn’t find what you looking for :(
        </p>
      )}
    </div>
  );
}
