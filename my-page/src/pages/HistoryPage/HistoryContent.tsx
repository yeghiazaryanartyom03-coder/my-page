import type {History} from '../../data/historys'

interface Prop{
  history: History
}

export function HistoryContent({history}: Prop) {
  return (
    <div className="history">
      <img src={history.image} className="history-img" />
      
        <div className="history-title">
          {history.title}
        </div>
        <div className="starting-text">
           {history.startingText} 
        </div>
      
      
    </div>
  );
}
