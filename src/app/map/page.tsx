"use client";
/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Layout from "../layout";
import Script from "next/script";
import { useRef, useState, useEffect } from "react";
import React from "react";

const Map = () => {
  const mapElement = useRef<HTMLDivElement | null>(null);
  const [naverMapsLoaded, setNaverMapsLoaded] = useState(false);

  useEffect(() => {
    if (window.naver && window.naver.maps) {
      setNaverMapsLoaded(true);
    } else {
      const intervalId = setInterval(() => {
        if (window.naver && window.naver.maps) {
          setNaverMapsLoaded(true);
          clearInterval(intervalId);
        }
      }, 100); // 100ms마다 체크

      // 클린업 함수
      return () => clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    if (mapElement.current && naverMapsLoaded) {
      const { naver } = window;
      const location = new naver.maps.LatLng(37.5665, 126.9780); // 서울의 위도와 경도로 변경
      const mapOptions = {
        center: location,
        zoom: 16,
        zoomControl: false,
      };
      const map = new naver.maps.Map(mapElement.current, mapOptions);
      new naver.maps.Marker({
        position: location,
        map: map,
      });
    }
  }, [naverMapsLoaded]);

  return (
    <Layout>
      <Script
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_MAP_CLIENT_ID}`}
        strategy="beforeInteractive"
        onLoad={() => setNaverMapsLoaded(true)}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <div ref={mapElement} style={{ width: "100%", height: "400px" }}></div> {/* 맵을 표시할 div */}
    </Layout>
  );
};

export default Map;