import React from "react";
import * as S from "../styles/components/ScrapListItemStyle.js";
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
    return <S.EmptyCard />;
  }

  /* 뉴스사별 아이콘 URL */
  var SourceTypeURL = `/src/assets/source/${article.source}.png`;

  return (
    <S.Card onClick={onArticleClick}>
      <S.CardBackground>
        <S.SourceIconContainer>
          <S.SourceIcon src={SourceTypeURL} alt="뉴스사" />
        </S.SourceIconContainer>

        <S.ThumbnailContainer>
          <S.Thumbnail src={article.image} alt={article.title} />
          <S.BookmarkButton onClick={onBookmarkClick}>
            <img src={bookmarkFilledIcon} alt="북마크" />
          </S.BookmarkButton>
        </S.ThumbnailContainer>

        <S.CardContent>
          <S.ContentHeader>
            <S.Keyword>{article.keyword}</S.Keyword>
            <S.PublishedDate>
              {formatPublishedDate(article.publishedAt)}
            </S.PublishedDate>
          </S.ContentHeader>
          <S.Title>{article.title}</S.Title>
        </S.CardContent>
      </S.CardBackground>
    </S.Card>
  );
};
export default ScrapListItem;
