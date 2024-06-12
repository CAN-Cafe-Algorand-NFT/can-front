"use client";

import React, { useState } from 'react';
import styled from 'styled-components';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: Filters) => void;
}

interface Filters {
  location: string;
  type: string;
  service: string;
}

type FilterCategory = keyof Filters;

const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen, onClose, onApply }) => {
  const [filters, setFilters] = useState<Filters>({ location: '', type: '', service: '' });

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  const selectFilter = (category: FilterCategory, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: prevFilters[category] === value ? '' : value,
    }));
  };

  const isSelected = (category: FilterCategory, value: string) => filters[category] === value;

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Sidebar onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>Filter</Title>
        <FilterSection>
          <SectionTitle>Location</SectionTitle>
          <FilterList>
            {['All', 'Chungcheong', 'Daejeon', 'Gwangju', 'Gyeongsang', 'Jeju', 'Jeolla', 'Seoul', 'Busan', 'Daegu', 'Gangwon', 'Gyeonggi', 'Incheon', 'Ulsan'].map((location) => (
              <FilterItem
                key={location}
                isSelected={isSelected('location', location)}
                onClick={() => selectFilter('location', location)}
              >
                {location}
              </FilterItem>
            ))}
          </FilterList>
        </FilterSection>
        <FilterSection>
          <SectionTitle>Type</SectionTitle>
          <FilterList>
            {['Kids cafe', 'Study cafe', '24 hour cafe', 'Brunch cafe', 'Board game cafe'].map((type) => (
              <FilterItem
                key={type}
                isSelected={isSelected('type', type)}
                onClick={() => selectFilter('type', type)}
              >
                {type}
              </FilterItem>
            ))}
          </FilterList>
        </FilterSection>
        <FilterSection>
          <SectionTitle>Service</SectionTitle>
          <FilterList>
            {['Free Wi-Fi', 'Outlets available', 'Parking available', 'Delivery service', 'Smoking room', 'Dogs allowed'].map((service) => (
              <FilterItem
                key={service}
                isSelected={isSelected('service', service)}
                onClick={() => selectFilter('service', service)}
              >
                {service}
              </FilterItem>
            ))}
          </FilterList>
        </FilterSection>
        <ApplyButton onClick={handleApply}>Apply</ApplyButton>
      </Sidebar>
    </Overlay>
  );
};

export default FilterSidebar;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  background: white;
  padding: 20px;
  overflow-y: auto;
  z-index: 1001;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Title = styled.h2`
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
`;

const FilterSection = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
`;

const FilterList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FilterItem = styled.li<{ isSelected: boolean }>`
  margin-bottom: 10px;
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? '#0070f3' : 'black')};
  &:hover {
    text-decoration: underline;
  }
`;

const ApplyButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
`;
