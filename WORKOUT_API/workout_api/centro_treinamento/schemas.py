from typing import Annotated

from pydantic import Field

from workout_api.contrib.schemas import BaseSchema

class CentroTreinamento(BaseSchema):
    nome: Annotated[str, Field(description='Nome do Centro de Treianemto', exemple='João', max_length=20)]
    endereco: Annotated[str, Field(description='Rua X, Quadra 2', exemple='CT Queen', max_length=30)] 
    proprietario: Annotated[int, Field(description='Nome do proprietário', exemple='João Souza', max_length=30)]