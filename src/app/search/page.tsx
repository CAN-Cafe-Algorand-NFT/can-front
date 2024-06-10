"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../layout";
import Navigationbar from "@/components/layout/Navigationbar";

const SearchContainer = styled.div`
  padding-top: 20px;
  position: relative;
  width: 375px; // 아이폰 15 프로의 CSS 픽셀 너비
  height: 708px; // 아이폰 15 프로의 CSS 픽셀 높이
  margin: 0 auto; // 중앙 정렬
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RecentSearches = styled.div`
  margin-bottom: 20px;
`;

const RecentSearchItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
`;

const SearchResults = styled.div``;

const SearchResultItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

interface SearchResult {
  name: string;
  address: string;
}

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Simulate loading recent searches from local storage
    const recentSearches = JSON.parse(localStorage.getItem("recentSearches") || "[]");
    setRecentSearches(recentSearches);
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      // Simulate search results
      const results: SearchResult[] = [
        { name: "Cafe Name 1", address: "Anam 128-1, Seoul" },
        { name: "Cafe Name 2", address: "Anam 128-1, Seoul" },
        { name: "Cafe Name 3", address: "Anam 128-1, Seoul" },
      ];
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleRecentSearchClick = (query: string) => {
    setSearchQuery(query);
    // Perform search with the clicked recent search query
  };

  const handleSearchResultClick = (result: SearchResult) => {
    const updatedRecentSearches = [result.name, ...recentSearches.filter(search => search !== result.name)];
    setRecentSearches(updatedRecentSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedRecentSearches));
    router.push(`/search/results?query=${result.name}`);
  };

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <SearchContainer>
        <SearchInput
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="카페 이름을 검색하세요"
        />
        {searchQuery.length === 0 && (
          <RecentSearches>
            <h3>최근 검색어</h3>
            {recentSearches.map((search, index) => (
              <RecentSearchItem key={index} onClick={() => handleRecentSearchClick(search)}>
                {search}
              </RecentSearchItem>
            ))}
          </RecentSearches>
        )}
        {searchQuery.length > 0 && (
          <SearchResults>
            {searchResults.map((result, index) => (
              <SearchResultItem key={index} onClick={() => handleSearchResultClick(result)}>
                <h4>{result.name}</h4>
                <p>{result.address}</p>
              </SearchResultItem>
            ))}
          </SearchResults>
        )}
      </SearchContainer>
        <Navigationbar />
    </Layout>
  );
};

export default Search;
