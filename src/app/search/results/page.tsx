"use client";

import Head from "next/head";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import Layout from "../../layout";
import Navigationbar from "@/components/layout/Navigationbar";

const ResultContainer = styled.div`
  padding-top: 20px;
  position: relative;
  width: 375px; // 아이폰 15 프로의 CSS 픽셀 너비
  height: 708px; // 아이폰 15 프로의 CSS 픽셀 높이
  margin: 0 auto; // 중앙 정렬
`;

const MapDiv = styled.div`
  width: 100%;
  height: 470px;
  margin-top: 20px;
`;

const ResultItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const SearchResults: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams?.get("query");
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMap = () => {
      const destination = { lat: 37.3595704, lng: 127.105399 }; // 검색 결과 위치 (예시)

      const map = new google.maps.Map(mapRef.current!, {
        center: destination,
        zoom: 15,
      });

      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();

      directionsRenderer.setMap(map);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const currentLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            const request = {
              origin: currentLocation,
              destination: destination,
              travelMode: google.maps.TravelMode.DRIVING,
            };

            directionsService.route(request, (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(result);
              } else {
                console.error(`error fetching directions ${result}`);
              }
            });
          },
          (error) => {
            console.error("Error getting location", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    if (window.google) {
      loadMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = loadMap;
      document.head.appendChild(script);
    }
  }, [query]);

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <ResultContainer>
        <h2>검색 결과</h2>
        <ResultItem>
          <h4>Cafe Name</h4>
          <p>Anam 128-1, Seoul</p>
        </ResultItem>
        {/* 지도 표시 */}
        <MapDiv id="map" ref={mapRef}></MapDiv>
      </ResultContainer>
      <Navigationbar />
    </Layout>
  );
};

export default SearchResults;
