import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BubbleChart = ({ keywordCounts, onKeywordClick }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!keywordCounts || Object.keys(keywordCounts).length === 0) return;

    const data = Object.entries(keywordCounts)
      .map(([keyword, count]) => ({ name: keyword, value: count }))
      .slice(0, 10); // 상위 10개만 표시

    const width = 800;
    const height = 600;
    const maxRadius = 150;

    const colorScale = d3
      .scaleSequential(d3.interpolateBlues)
      .domain([
        Math.min(...data.map((d) => d.value)),
        Math.max(...data.map((d) => d.value)),
      ]);

    const bubble = d3.pack().size([width, height]).padding(5);
    const root = d3.hierarchy({ children: data }).sum((d) => d.value);
    bubble(root);

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", width)
      .attr("height", height)
      .attr("class", "bubble");

    const nodes = svg
      .selectAll(".node")
      .data(root.children)
      .join("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${d.x}, ${d.y})`)
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        if (onKeywordClick) {
          onKeywordClick(d.data.name);
        }
      });

    nodes
      .append("circle")
      .attr("r", (d) => Math.min(d.r, maxRadius))
      .attr("fill", (d) => colorScale(d.data.value));

    nodes
      .append("text")
      .attr("dy", ".3em")
      .attr("text-anchor", "middle")
      .text((d) => d.data.name)
      .attr("fill", "#fff")
      .style("font-size", (d) => `${Math.max(d.r / 5, 12)}px`)
      .style("font-weight", "bold");
  }, [keywordCounts, onKeywordClick]);

  return <svg ref={svgRef}></svg>;
};

export default BubbleChart;
