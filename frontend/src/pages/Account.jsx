import AccountSidebar from "../components/account/AccountSidebar";
import AccountInfoForm from "../components/account/AccountInfoForm";
import AddressForm from "../components/account/AddressForm";
import PasswordForm from "../components/account/PasswordForm";

export function Account() {
  return (
    <div className="flex max-w-6xl mx-auto p-6 space-x-8">
      <AccountSidebar />

      <div className="flex-1 space-y-8">
        <h1 className="text-3xl font-bold text-[#800020] mb-4">My Account</h1>
        <AccountInfoForm />
        <AddressForm />
        <PasswordForm />
      </div>
    </div>
  );
}

export default Account;
