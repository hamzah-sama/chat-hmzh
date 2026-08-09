
interface Props {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="h-screen bg-[#0d0f14] text-white overflow-hidden">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur">
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
