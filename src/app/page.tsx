import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div>
        {/* Hero Section  */}
        <Hero/>

        {/* Search bar + Categories  */}
        <CategorySearch/>

        {/* Popular Doctor List  */}
        <DoctorList />
    </div>
  );
}
