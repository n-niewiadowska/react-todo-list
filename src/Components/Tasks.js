import { ToDo } from './ToDo';

// Component for tasks sections.

export function Tasks() {

  return (
    <div className="Tasks">
      <div className="Tasks-urgent">
        <h3>urgent</h3>
        <ToDo />
      </div>
      <div class="Tasks-daily">
        <h3>daily</h3>
        <ToDo />
      </div>
      <div class="Tasks-other">
        <h3>other</h3>
        <ToDo />
      </div>
    </div>
  );
}