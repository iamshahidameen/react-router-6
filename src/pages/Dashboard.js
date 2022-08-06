const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <h4>Dashboard</h4>
      <h5>Welcome, {user.name}</h5>
      <h6>Package sent to : {user.email}</h6>
    </section>
  );
};
export default Dashboard;
