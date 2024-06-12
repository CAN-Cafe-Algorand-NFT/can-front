"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Navigationbar from './layout/Navigationbar';
import { recommendations } from './recommendationData'; 
import FilterSidebar from './FilterSidebars'; 

interface Filters {
  location?: string;
  type?: string;
  service?: string;
}

const CafeContent = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredCafes, setFilteredCafes] = useState(recommendations);

  const toggleFilterSidebar = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const applyFilters = (filters: Filters) => {
    const filtered = recommendations.filter(cafe => {
      const matchLocation = filters.location ? cafe.location === filters.location || filters.location === 'All' : true;
      const matchType = filters.type ? cafe.type === filters.type : true;
      const matchService = filters.service ? cafe.service === filters.service : true;
      return matchLocation && matchType && matchService;
    });
    setFilteredCafes(filtered);
  };

  return (
    <ContentContainer>
      <SearchContainer>
        <SearchBar placeholder="Search" />
      </SearchContainer>
      <FilterContainer>
        <FilterButton onClick={toggleFilterSidebar}>Location</FilterButton>
        <FilterButton onClick={toggleFilterSidebar}>Type</FilterButton>
        <FilterButton onClick={toggleFilterSidebar}>Service</FilterButton>
        <MoreFilters onClick={toggleFilterSidebar}>•••</MoreFilters>
      </FilterContainer>
      <List>
        {filteredCafes.map((item) => (
          <Link href={`/cafe/${item.id}`} key={item.id} passHref>
            <StyledLink>
              <ListItem>
                <Image src={item.image} alt={item.name} />
                <Info>
                  <CafeName>{item.name}</CafeName>
                  <CafeAddress>{item.address}</CafeAddress>
                </Info>
                <Icons>
                  <Icon src="/images/Coffee-image.png" alt="Coffee" />
                  <HeartIcon src={item.heartIcon} alt="Heart" />
                </Icons>
              </ListItem>
            </StyledLink>
          </Link>
        ))}
      </List>
      <NavigationContainer>
        <Navigationbar />
      </NavigationContainer>
      <FilterSidebar isOpen={isFilterOpen} onClose={toggleFilterSidebar} onApply={applyFilters} />
    </ContentContainer>
  );
};

export default CafeContent;

const ContentContainer = styled.div`
  padding: 20px;
  position: relative;
  width: 375px; // 아이폰 15 프로의 CSS 픽셀 너비
  height: 708px; // 아이폰 15 프로의 CSS 픽셀 높이
  margin: 0 auto; // 중앙 정렬
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SearchBar = styled.input`
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;
`;

const MoreFilters = styled.button`
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

const Info = styled.div`
  flex: 1;
  margin-left: 10px;
`;

const CafeName = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const CafeAddress = styled.div`
  font-size: 14px;
  color: #666;
`;

const Icons = styled.div`
  display: flex;
  gap: 5px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const HeartIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const StyledLink = styled.a`
  display: block;
  width: 100%;
  text-decoration: none;
`;

const NavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 375px;
  background: #fff;
  border-top: 1px solid #E7E7E7;
`;
