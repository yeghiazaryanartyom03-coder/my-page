import {type legend} from '../../data/legends'

interface LegendProp{
  legend:legend
}

export function Legend({legend}:LegendProp) {
  return (
    <>
      <div className="legend">
        <img src={legend.image} className="legend-img" />
        <div className="legend-info">
          <div className="legend-name">{legend.name}</div>
          <div className="starting-text-legend">{`${legend.startingText}...`}</div>
        </div>
      </div>
    </>
  );
}
