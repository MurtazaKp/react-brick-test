import { Image, RichText, Text, types, Repeater } from 'react-bricks/frontend'
import { ButtonProps } from '../react-bricks-ui/shared/bricks/Button'
import Link from 'next/link'
import { buttonColors } from '../react-bricks-ui/colors'
import blockNames from '../react-bricks-ui/blockNames'

type Padding = 'big' | 'small'

interface CtaProps {
  padding: Padding
  title: string
  text: string
  //   buttons: ButtonProps[]
  image: types.IImageSource
}

const Cta: types.Brick<CtaProps> = ({ padding }) => {
  return (
    <div className="bg-gray-100 overflow-y-hidden">
      <div className="mx-auto container py-12 px-4 lg:px-0">
        <div className="w-full flex justify-center">
          <div className="w-full md:w-11/12 xl:w-full  bg-gradient-to-r from-indigo-500 to-indigo-700 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
            <div>
              <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                  <div>
                    <Text
                      renderBlock={(props) => (
                        <h1
                          role="heading"
                          className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center"
                        >
                          {props.children}
                        </h1>
                      )}
                      propName="title"
                      placeholder="type a title"
                    />
                  </div>
                  <Repeater
                    propName="buttons"
                    renderWrapper={(items) => (
                      <div className="flex flex-row space-x-5 items-center justify-start lg:justify-start mt-6">
                        {items}
                      </div>
                    )}
                  />
                  {/* <Link href="/" target="_blank">
                    <button
                      role="button"
                      aria-label="Join the community"
                      className="mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
                    >
                      Join the community
                    </button>
                  </Link> */}
                </div>
                <div className="md:w-1/3 w-2/3">
                  <Image propName="image" alt="altText" />
                </div>
                {/* https://img.freepik.com/free-vector/add-tasks-concept-illustration_114360-4765.jpg?size=626&ext=jpg&uid=R104274661&ga=GA1.1.48591774.1691750216&semt=ais */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Cta.schema = {
  name: 'cta',
  label: 'custom-cta-component',
  getDefaultProps: () => ({
    padding: 'big',
    title:
      'Start Your Journey Today! Explore New Adventures and Create Lasting Memories.',
    buttons: [
      {
        type: 'link',
        text: 'Get Started now',
        href: '',
        isTargetBlank: false,
        buttonType: 'submit',
        buttonColor: buttonColors.SKY.value,
        variant: 'solid',
        padding: 'normal',
        simpleAnchorLink: false,
      },
      {
        type: 'link',
        text: 'Watch demo',
        href: '',
        isTargetBlank: false,
        buttonType: 'submit',
        buttonColor: buttonColors.SKY.value,
        variant: 'outline',
        padding: 'normal',
        simpleAnchorLink: false,
      },
    ],
    image: {
      src: 'https://img.freepik.com/free-vector/add-tasks-concept-illustration_114360-4765.jpg?size=626&ext=jpg&uid=R104274661&ga=GA1.1.48591774.1691750216&semt=ais',
      placeholderSrc:
        'https://img.freepik.com/free-vector/add-tasks-concept-illustration_114360-4765.jpg?size=626&ext=jpg&uid=R104274661&ga=GA1.1.48591774.1691750216&semt=ais',
      width: 3385,
      height: 1693,
      alt: 'altTexxczdfat',
      seoName: '',
    },
  }),
  sideEditProps: [
    {
      name: 'padding',
      label: 'Padding',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'big', label: 'Big Padding' },
          { value: 'small', label: 'Small Padding' },
        ],
      },
    },
  ],
  repeaterItems: [
    {
      name: 'buttons',
      itemType: blockNames.Button,
      itemLabel: 'Button',
      min: 0,
      max: 2,
    },
  ],
}

export default Cta
