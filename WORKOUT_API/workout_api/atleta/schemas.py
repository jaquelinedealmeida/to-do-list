from typing import Annotated
from pydantic import Field, PositiveFloat

from workout_api.contrib.schemas import BaseSchema

class Atleta(BaseSchema):
    nome: Annotated[str, Field(description='Nome do Atleta', exemplo='João', max_length=50)]
    cpf: Annotated[str, Field(description='CPF do Atleta', exemplo='12345678997', max_length=11)] 
    #poderia fazer uma validacao para o cpf
    idade: Annotated[int, Field(description='Idade do Atleta', exemplo=30)]
    peso: Annotated[PositiveFloat, Field(description=' Peso do Atleta', exemplo=75.5)]
    altura: Annotated[PositiveFloat, Field(description=' Altura do Atleta', exemplo=1.75)]
    sexo: Annotated[str, Field(description='Altura do Atleta', exemplo='M', max_length=1)]
    #Positivefloat indica que é preciso ter um valor diferene de zero
    # o pydantic tipa os dados