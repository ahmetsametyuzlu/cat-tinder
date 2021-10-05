import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import { Cat, Category } from "../services/Types";
import { catNoPet, catPet, catsClear, catSkip, catsLoad } from "../services/store/actions";
import { selectCatSwipes } from "../services/store/selectors";
import './Category.scss';

interface CategoryParams {
  categoryId?: string;
}

export default function ContainerCategory() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {categoryId} = useParams<CategoryParams>();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const catSwipes = useSelector(selectCatSwipes);
  const [catSwipeIndex, setCatSwipeIndex] = useState(0);
  const [category, setCategory] = useState<Category>();

  useEffect(() => {
    dispatch(catsClear());

    fetch("https://api.thecatapi.com/v1/categories")
    .then(response => response.json())
    .then(async (categories: Category[]) => {
      await setCategory(categories.find(category => String(category.id) === String(categoryId)));
    })
    .catch(async (err) => {
      await setError(true);
    })

    fetch(`https://api.thecatapi.com/v1/images/search?limit=10&category_ids=${categoryId}`)
    .then(response => response.json())
    .then(async (cats: Cat[]) => {
      dispatch(catsLoad(cats));
      await setLoading(false);
    })
    .catch(async (err) => {
      console.log(err);
      await setError(true);
      await setLoading(false);
    })
  }, [categoryId]);

  const handleNext = () => {
    if (catSwipeIndex === catSwipes.length - 1) {
      history.push(`/stats/${categoryId}`);
    } else {
      setCatSwipeIndex(catSwipeIndex + 1);
    }
  }

  const handlePet = () => {
    dispatch(catPet(catSwipes[catSwipeIndex].cat.id));
    handleNext();
  }

  const handleSkip = () => {
    dispatch(catSkip(catSwipes[catSwipeIndex].cat.id));
    handleNext();
  }

  const handleNoPet = () => {
    dispatch(catNoPet(catSwipes[catSwipeIndex].cat.id));
    handleNext();
  }

  if (!categoryId) {
    return <div className="error">Not Found</div>
  }

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  if (error) {
    return <div className="error">Error while loading cats. Please try again later!</div>
  }

  return (
    <>
      <div className="page-category">
        {category ? (
          <div className="category-title">&gt; {category.name}</div>
        ) : null}

        <p>Would you pet it? </p>
        <div className="cat">
          <div
            className="cat-image"
            style={{
              backgroundImage: `url("${catSwipes[catSwipeIndex].cat.url}")`
            }}
          />
          <div className="cat-process">
            {catSwipeIndex + 1} of {catSwipes.length}
          </div>
          <div className="cat-action">
            <button
              onClick={handleNoPet}
              className="cat-action-pet-no"
            >
              <img
                src="/cat-tinder/img/action/DontPet.svg"
                alt=""
              />
              <span>Don't pet it!</span>
            </button>
            <button
              onClick={handleSkip}
              className="cat-action-skip"
            >
              <img
                src="/cat-tinder/img/action/Skip.svg"
                alt=""
              />
              <span>Skip it!</span>
            </button>
            <button
              onClick={handlePet}
              className="cat-action-pet"
            >
              <img
                src="/cat-tinder/img/action/Pet.svg"
                alt=""
              />
              <span>Pet it!</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
