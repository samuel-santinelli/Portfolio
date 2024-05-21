import { Flex, Image, Text } from "@mantine/core";
import { IconLuggage } from "@tabler/icons-react";
import Banner from "../../assets/img/experience-banner.png";
import CompanyLogo from "../../assets/img/adviseuit_logo.png";

const Experience = () => {
  return (
    <Flex direction={"column"} gap={"sm"}>
      <Flex justify={"center"}>
        <Text size="xl" className="block__title-text">
          Minha{" "}
          <Text c={"#9D70F6"} span={true} className="block__title-text">
            experiência <IconLuggage width={"35px"} height={"35px"} />
          </Text>
        </Text>
      </Flex>

      <div className="banner-container">
        <Image src={Banner} style={{ zIndex: 1 }} className="banner-image" />
        <Flex className="overlay" justify={"center"} p={"lg"}>
          <Flex direction={"column"} h={"600px"} w={"900px"} gap={"md"}>
            <Flex justify={"center"} direction={"column"} align={"center"}>
              <Image src={CompanyLogo} h={"140px"} w={"140px"} />
              <Text size="40px">Adviseu</Text>
            </Flex>
            <Text className="overlay-text">
              Iniciei como estagiário em desenvolvimento de software full stack
              no ano de janeiro de 2022, através de treinamentos e projetos,
              tive a oportunidade de adquirir uma valiosa experiência e
              contribuir significativamente para a equipe de desenvolvimento da
              Adviseu. Desempenhei um papel fundamental na concepção,
              implementação e manutenção de aplicações web abrangentes, fazendo
              uso das tecnologias{" "}
              <Text span className="overlay-text" color="#8d41f1">
                React, React Native e Node.js
              </Text>
              . Quanto aos bancos de dados, trabalhei com os sistemas{" "}
              <Text span className="overlay-text" color="#8d41f1">
                PostgreSQL e MongoDB
              </Text>
              , aprimorando ainda mais minhas habilidades técnicas e práticas de
              desenvolvimento. Atualmente como Desenvolvedor Full Stack Júnior, busco
              excelência técnica e contribuição efetiva para aplicações web e
              mobile. Cresci profissionalmente ao enfrentar desafios do mundo do
              software, utilizando tecnologias como{" "}
              <Text span className="overlay-text" color="#8d41f1">
                React, React Native, Vue.js (frontend)
              </Text>{" "}
              e{" "}
              <Text span className="overlay-text" color="#8d41f1">
                Node.js/TypeScript (backend)
              </Text>
              . Tenho também experiência em{" "}
              <Text span className="overlay-text" color="#8d41f1">
                Docker
              </Text>{" "}
              e{" "}
              <Text span className="overlay-text" color="#8d41f1">
                Kubernetes
              </Text>{" "}
              para gerenciamento de contêineres, implementação de{" "}
              <Text span className="overlay-text" color="#8d41f1">
                CI/CD
              </Text>{" "}
              para entregas contínuas, e em testes automatizados com{" "}
              <Text span className="overlay-text" color="#8d41f1">
                JMeter
              </Text>{" "}
              e{" "}
              <Text span className="overlay-text" color="#8d41f1">
                Cypress.io
              </Text>
              . Além disso, integrei serviços{" "}
              <Text span className="overlay-text" color="#8d41f1">
                Firebase
              </Text>{" "}
              para funcionalidades avançadas.
            </Text>
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
};

export default Experience;
