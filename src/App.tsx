import Header from "./components/header";
import ListingOverview from "./components/listing-overview";
import OtherActions from "./components/other-actions";
import SalesOverview from "./components/sales-overview";
import UserOverview from "./components/user-overview";

function App() {
  return (
    <main className="bg-[#fbfcfc] min-h-screen">
      <Header />
      <div className="px-15">
        <h2 className="text-xl font-semibold my-4">Welcome, Ahmed</h2>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-4">
            <SalesOverview />
          </div>
          <div className="col-span-2 grid gap-6 h-full ">
            <ListingOverview />
            <UserOverview />
          </div>
        </div>

        <OtherActions />
      </div>
    </main>
  );
}

export default App;
