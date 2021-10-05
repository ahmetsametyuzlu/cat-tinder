import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Category } from "../services/Types";
import './Home.scss';

export default function ContainerHome() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/categories")
    .then(response => response.json())
    .then(async (categories: Category[]) => {
      const categoriesWithImage = await Promise.all(
        categories.map(category => {
          return fetch(`https://api.thecatapi.com/v1/images/search?limit=1&category_ids=${category.id}`)
          .then(response => response.json())
          .then(async (response) => {
            return {
              ...category,
              image: response[0],
            }
          });
        })
      );

      await setCategories(categoriesWithImage);
      await setLoading(false);
    })
    .catch(async (err) => {
      console.log(err);
      await setError(true);
      await setLoading(false);
    })
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  if (error) {
    return <div className="error">Error while loading categories. Please try again later!</div>
  }

  return (
    <>
      <div className="page-home">
        <p>Select a category</p>
        <div className="category-list">
          {categories.map(category => (
            <Link
              to={`/category/${category.id}`}
              key={String(category.id)}
              style={{
                backgroundImage: `url("${category.image?.url}")`
              }}
            >
              <span>{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
