import React from "react";
import {
  Card,
  EmptyCard,
  CardBackground,
  SourceIcon,
  ThumbnailContainer,
  Thumbnail,
  BookmarkButton,
  CardContent,
  ContentHeader,
  Source,
  PublishedDate,
  Title,
} from "../styles/components/ScrapListItemStyle.js";
import bookmarkIcon from "../assets/icons/bookmark.svg";
import bookmarkFilledIcon from "../assets/icons/bookmark_filled.svg";

const formatPublishedDate = (isoDate) => {
  if (!isoDate) return "날짜 없음";
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
};

const ScrapListItem = ({
  scrap,
  article,
  isEmpty,
  onArticleClick,
  onBookmarkClick,
}) => {
  if (isEmpty) {
    return <EmptyCard />;
  }
  /* 뉴스사별 아이콘 분기문 */
  var SourceTypeURL = "";
  switch (article.source) {
    case "YTN":
      SourceTypeURL = `/src/assets/test/ytn.png`;
      break;
    case "KBS":
      SourceTypeURL = `/src/assets/test/kbs.png`;
    default:
      break;
  }
  return (
    <Card onClick={onArticleClick}>
      <CardBackground>
        <SourceIcon src={SourceTypeURL} alt="뉴스사" />

        <ThumbnailContainer>
          <Thumbnail src={article.image} alt={article.title} />
          <BookmarkButton onClick={onBookmarkClick}>
            <img src={bookmarkFilledIcon} alt="북마크" />
          </BookmarkButton>
        </ThumbnailContainer>

        <CardContent>
          <ContentHeader>
            <Source>{article.source}</Source>
            <PublishedDate>
              {formatPublishedDate(article.publishedAt)}
            </PublishedDate>
          </ContentHeader>
          <Title>{article.title}</Title>
        </CardContent>
      </CardBackground>
    </Card>
  );
};
export default ScrapListItem;
