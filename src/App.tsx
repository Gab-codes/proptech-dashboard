import Header from "./components/header";
import ListingOverview from "./components/listing-overview";
import OtherActions from "./components/other-actions";
import SalesOverview from "./components/sales-overview";
import ChatButton from "./components/ui/chat-button";
import UserOverview from "./components/user-overview";

function App() {
  return (
    <main className="bg-[#fbfcfc] min-h-screen max-sm:pb-14">
      <Header />
      <div className="px-4 lg:px-15">
        <h1 className="text-xl font-semibold my-4">Welcome, Ahmed</h1>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="col-span-1 lg:col-span-4">
            <SalesOverview />
          </div>
          <div className="col-span-1 lg:col-span-2 grid gap-6 h-full ">
            <ListingOverview />
            <UserOverview />
          </div>
        </div>

        <OtherActions />
      </div>

      <ChatButton />
    </main>
  );
}

export default App;
