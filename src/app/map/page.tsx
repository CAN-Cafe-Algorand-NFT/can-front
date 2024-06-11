"use client";
import Head from "next/head";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../layout";
import Navigationbar from "@/components/layout/Navigationbar";

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    const cafes = [
      { name: "Cafe A", lat: 37.3595704, lng: 127.105399 },
      { name: "Cafe B", lat: 37.4601904, lng: 126.95736 },
      { name: "Cafe C", lat: 37.3942904, lng: 126.956399 },
    ];

    const initMap = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const currentLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            const newMap = new google.maps.Map(mapRef.current!, {
              center: currentLocation,
              zoom: 15,
            });

            new google.maps.Marker({
              position: currentLocation,
              map: newMap,
              title: "현재 위치",
            });

            setMap(newMap);

            // 기존 카페 데이터에 마커 추가
            cafes.forEach((cafe) => {
              const marker = new google.maps.Marker({
                position: { lat: cafe.lat, lng: cafe.lng },
                map: newMap,
                title: cafe.name,
              });

              const infoWindow = new google.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:10px;">${cafe.name}</div>`,
              });

              marker.addListener("click", () => {
                infoWindow.open(newMap, marker);
              });
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

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []); // 종속성 배열에 빈 배열을 사용하여 초기 렌더링 시에만 실행

  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <IphoneContainer>
        <SearchLink href="/search">카페 이름을 검색하세요</SearchLink>
        <MapDiv id="map" ref={mapRef} />
      </IphoneContainer>
      <Navigationbar />
    </Layout>
  );
};

export default Map;

// 스타일드 컴포넌트 정의
const IphoneContainer = styled.div`
  position: relative;
  width: 375px; // 아이폰 15 프로의 CSS 픽셀 너비
  height: 728px; // 아이폰 15 프로의 CSS 픽셀 높이
  margin: 0 auto; // 중앙 정렬
`;

const MapDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const SearchLink = styled(Link)`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  text-align: center;
`;
