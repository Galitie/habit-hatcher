import Button from "./Button";

const Header = ({ onAdd, showAddTask }) => {
  return (
    <header className="header">
      <h1>Habit Hatcher</h1>
      <Button
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "Close" : "Add task"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
