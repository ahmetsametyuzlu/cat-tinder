import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectCatSwipes } from "../services/store/selectors";
import './Stats.scss';

interface StatsParams {
  categoryId?: string;
}

export default function ContainerStats() {
  const {categoryId} = useParams<StatsParams>();

  const catSwipes = useSelector(selectCatSwipes);

  const countPet = catSwipes.filter(catSwipe => catSwipe.status === true).length;
  const countNoPet = catSwipes.filter(catSwipe => catSwipe.status === false).length;
  const countSkip = catSwipes.filter(catSwipe => catSwipe.status === null).length;

  return (
    <>
      <div className="page-stats">
        <div className="stats-title">&gt; Stats</div>

        <p>Cats seen: {catSwipes.length}</p>

        <div className="stats">
          <div className="stat-no-pet">
            <div className="stat-image">
              <img
                src="/cat-tinder/img/action/DontPet.svg"
                alt=""
              />
            </div>
            <div className="stat-detail">
              <strong>{countNoPet}</strong>
              <span>Cats you didn't pet</span>
            </div>
          </div>
          <div className="stat-skip">
            <div className="stat-image">
              <img
                src="/cat-tinder/img/action/Skip.svg"
                alt=""
              />
            </div>
            <div className="stat-detail">
              <strong>{countSkip}</strong>
              <span>Cats you skipped</span>
            </div>
          </div>
          <div className="stat-pet">
            <div className="stat-image">
              <img
                src="/cat-tinder/img/action/Pet.svg"
                alt=""
              />
            </div>
            <div className="stat-detail">
              <strong>{countPet}</strong>
              <span>Cats you pet</span>
            </div>
          </div>
        </div>

        <div className="stats-action">
          <Link to={`/category/${categoryId}`}>Restart In Same Category</Link>
          <Link to="/">Select New Category</Link>
        </div>
      </div>
    </>
  );
}
