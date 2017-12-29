import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import s from './GridComponent.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    overflowY: 'auto',
  },
  gridTile: {
    background: '#016e79'
  }
};

const tilesData = [
  {
    "name": "Alderaan",
    "population": "2000000000",
  },
  {
    "name": "Yavin IV",
    "population": "1000",
  },
  {
    "name": "Dagobah",
    "population": "unknown",
  },
  {
    "name": "Endor",
    "population": "30000000",
  },
  {
    "name": "Naboo",
    "population": "4500000000",
  },
  {
    "name": "Coruscant",
    "population": "1000000000000",
  },
  {
    "name": "Kamino",
    "population": "1000000000",
  },
  {
    "name": "Geonosis",
    "population": "100000000000",
  }
];

const GridComponent  = () => {
  return(
    <div className={s.container}>
      <GridList cellHeight={180} style={styles.gridList}>
        <Subheader>Planets</Subheader>
        {tilesData.map((tile) => (
          <GridTile
          key={tile.img}
          title={tile.name}
          style={styles.gridTile}
          subtitle={<span>population: <b>{tile.population}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
        </GridTile>
      ))}
      </GridList>
    </div>
  );
}

export default GridComponent;
