import TypewriterComponent from "typewriter-effect"

const TypeWritter = (strings) => {    
    return (
        <TypewriterComponent
        options={{
          strings: strings.strings,
          autoStart: true,
          loop: true,
          deleteSpeed: 20,
          delay: 40,
        }}
      />
    )
}

export default TypeWritter