import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userVerify = this.usersRepository.findById(user_id);
    if (!userVerify) {
      throw new Error("User not found");
    }
    const user = this.usersRepository.turnAdmin(userVerify);
    return user;
  }
}

export { TurnUserAdminUseCase };
