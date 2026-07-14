export default function BackgroundDecor() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern"></div>
      <div className="fixed -top-[200px] -left-[150px] w-[500px] h-[500px] bg-cyan opacity-10 blur-[140px] rounded-full z-0 pointer-events-none"></div>
      <div className="fixed top-[20%] -right-[200px] w-[500px] h-[500px] bg-violet opacity-10 blur-[140px] rounded-full z-0 pointer-events-none"></div>
      <div className="fixed -bottom-[150px] left-[30%] w-[450px] h-[450px] bg-amber opacity-7 blur-[140px] rounded-full z-0 pointer-events-none"></div>
    </>
  )
}
