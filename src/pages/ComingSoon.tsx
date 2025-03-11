import brickGif from '../assets/images/bricks.gif'

function ComingSoon() {
  return (
    <>
      <main
        className={
          'bg-gradient-to-br from-blue-900 to-slate-950 text-slate-500 h-screen w-full flex flex-col gap-8 justify-center text-center items-center'
        }
      >
        <div
          className={
            'flex flex-col gap-8 justify-center text-center items-center container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
          }
        >
          <img
            src={brickGif}
            alt={
              'Transparent and blue block resembling a toy brick with four circular studs against a transparent background.'
            }
            className={'w-1/3'}
          />

          <h1
            className={
              'logo-font text-blue-500 text-5xl md:text-6xl lg:text-7xl'
            }
          >
            We're Building Something Amazing!{' '}
          </h1>

          <p className={'text-xl md:text-2xl lg:text-3xl'}>
            Track your gaming backlog, share reviews, and connect with other
            players. The ultimate game-tracking experience is on its way!{' '}
          </p>

          <div className={'flex flex-col gap-4'}>
            <p className={'text-lg md:text-xl lg:text-2xl'}>
              Stay in the loop! Follow our progress and contribute to
              GameBlame:{' '}
            </p>

            <div className={'md:text-lg lg:text-xl'}>
              <p>
                <i className={'uil uil-github'}></i> Star our repository on{' '}
                <a
                  href={'https://github.com/hennasoftware/gameblame'}
                  className={'text-blue-500 hover:underline'}
                >
                  GitHub
                </a>
              </p>

              <p>
                <i className={'uil uil-discord'}></i> Join our community on{' '}
                <a
                  href={'https://discord.gg/RbSCJWZpaw'}
                  className={'text-blue-500 hover:underline'}
                >
                  Discord
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ComingSoon
