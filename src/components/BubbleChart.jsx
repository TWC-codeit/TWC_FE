import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BubbleChart = ({ keywordCounts }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!keywordCounts || Object.keys(keywordCounts).length === 0) return;

    d3.select(svgRef.current).selectAll("*").remove(); // 기존 차트 제거

    const width = 600,
      height = 500;

    // 🔹 데이터 유효성 검사 (NaN 제거)
    const validData = Object.entries(keywordCounts)
      .filter(([name, size]) => typeof size === "number" && !isNaN(size)) // NaN 제거
      .map(([name, size]) => ({ name, size }));

    if (validData.length === 0) return; // 유효한 데이터 없으면 차트 렌더링 X

    // 🔹 색상 스케일: 값이 클수록 진한 파란색 적용
    const minSize = d3.min(validData, (d) => d.size);
    const maxSize = d3.max(validData, (d) => d.size);
    const colorScale = d3
      .scaleSequential(d3.interpolateBlues)
      .domain([minSize, maxSize]);

    // D3 pack layout 사용
    const bubble = d3.pack().size([width, height]).padding(2);

    const root = d3
      .hierarchy({ children: validData })
      .sum((d) => d.size)
      .sort((a, b) => b.value - a.value);

    bubble(root);

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("class", "bubble");

    const nodes = svg
      .selectAll(".node")
      .data(root.children)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${d.x || 0}, ${d.y || 0})`); // 🔹 NaN 방지

    nodes
      .append("circle")
      .attr("r", (d) => d.r || 10) // 🔹 NaN 방지: 최소 크기 지정
      .style("fill", (d) => colorScale(d.data.size)) // ✅ 값이 클수록 진한 파란색 적용
      .style("opacity", 0.8)
      .transition()
      .duration(1000)
      .attr("r", (d) => d.r || 10);

    nodes
      .append("text")
      .attr("dy", ".3em")
      .attr("text-anchor", "middle")
      .style("fill", "#fff")
      .style("font-size", (d) => Math.max(10, d.r / 4) + "px")
      .text((d) => d.data.name);
  }, [keywordCounts]);

  return <svg ref={svgRef} />;
};

export default BubbleChart;
